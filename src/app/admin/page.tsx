export const dynamic = 'force-dynamic'

'use client'

import { useEffect, useState, useRef } from 'react'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import { Loader2, Upload, Trash2, LogOut, Image as ImageIcon, Settings, CheckCircle2, Home, Grid, LayoutDashboard, PlusCircle, AlertCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

type GalleryImage = {
  id: string
  created_at: string
  url: string
  title: string | null
  category: string
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'gallery' | 'settings'>('gallery')
  const [images, setImages] = useState<GalleryImage[]>([])
  const [siteSettings, setSiteSettings] = useState<Record<string, string>>({})
  
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [settingUploading, setSettingUploading] = useState<string | null>(null)
  
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  
  const [newTitle, setNewTitle] = useState('')
  const [newCategory, setNewCategory] = useState('Events')

  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    
    // Fetch gallery images
    const { data: galleryData, error: galleryError } = await supabase
      .from('gallery')
      .select('*')
      .order('created_at', { ascending: false })

    if (galleryError) console.error('Error fetching images:', galleryError)
    else setImages(galleryData || [])

    // Fetch site settings
    const { data: settingsData, error: settingsError } = await supabase
      .from('site_settings')
      .select('*')

    if (settingsError) {
      console.error('Error fetching site settings. Did you create the table?', settingsError)
    } else {
      const settingsMap: Record<string, string> = {}
      settingsData?.forEach((setting) => {
        settingsMap[setting.key] = setting.value
      })
      setSiteSettings(settingsMap)
    }

    setLoading(false)
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/admin/login')
    router.refresh()
  }

  const handleUploadGallery = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!fileInputRef.current?.files || fileInputRef.current.files.length === 0) {
      setError('Please select at least one image to upload.')
      return
    }

    const files = Array.from(fileInputRef.current.files)
    setUploading(true)
    setError(null)

    try {
      for (const file of files) {
        const fileExt = file.name.split('.').pop()
        const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`
        const filePath = `${fileName}`

        const { error: uploadError } = await supabase.storage
          .from('gallery')
          .upload(filePath, file)

        if (uploadError) throw uploadError

        const { data: { publicUrl } } = supabase.storage
          .from('gallery')
          .getPublicUrl(filePath)

        const { error: dbError } = await supabase
          .from('gallery')
          .insert([
            { url: publicUrl, title: files.length > 1 ? null : newTitle, category: newCategory }
          ])

        if (dbError) throw dbError
      }

      setNewTitle('')
      setNewCategory('Events')
      if (fileInputRef.current) fileInputRef.current.value = ''
      
      fetchData()
    } catch (err: any) {
      console.error('Upload error:', err)
      setError(err.message || 'Error uploading image')
    } finally {
      setUploading(false)
    }
  }

  const handleDeleteGallery = async (id: string, url: string) => {
    if (!confirm('Are you sure you want to delete this image?')) return

    try {
      const { error: dbError } = await supabase
        .from('gallery')
        .delete()
        .eq('id', id)

      if (dbError) throw dbError

      try {
        const urlObj = new URL(url)
        const pathSegments = urlObj.pathname.split('/')
        const fileName = pathSegments[pathSegments.length - 1]
        
        await supabase.storage.from('gallery').remove([fileName])
      } catch (e) {
        console.error('Could not delete file from storage', e)
      }

      fetchData()
    } catch (err: any) {
      console.error('Delete error:', err)
      alert(err.message || 'Error deleting image')
    }
  }

  const handleUpdateSiteSetting = async (key: string, file: File) => {
    setSettingUploading(key)
    try {
      const fileExt = file.name.split('.').pop()
      const fileName = `${key}_${Date.now()}.${fileExt}`
      
      const { error: uploadError } = await supabase.storage
        .from('gallery')
        .upload(fileName, file)

      if (uploadError) throw uploadError

      const { data: { publicUrl } } = supabase.storage
        .from('gallery')
        .getPublicUrl(fileName)

      const { error: dbError } = await supabase
        .from('site_settings')
        .upsert({ key, value: publicUrl })

      if (dbError) throw dbError

      setSiteSettings(prev => ({ ...prev, [key]: publicUrl }))
    } catch (err: any) {
      console.error('Update setting error:', err)
      alert(err.message || 'Error updating setting')
    } finally {
      setSettingUploading(null)
    }
  }

  return (
    <div className="min-h-screen bg-surface flex flex-col md:flex-row font-sans">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-white border-r border-gray-200 flex flex-col shrink-0">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between md:justify-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors p-1.5">
              <Image src="/logo.png" alt="Kids Zone" width={32} height={32} className="object-contain" />
            </div>
            <span className="font-bold font-quicksand text-lg text-foreground">Kids Zone</span>
          </Link>
          <button onClick={handleSignOut} className="md:hidden text-gray-500 hover:text-gray-900">
            <LogOut className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 flex-1 space-y-2 flex md:flex-col overflow-x-auto md:overflow-visible">
          <button
            onClick={() => setActiveTab('gallery')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all shrink-0 ${
              activeTab === 'gallery'
                ? 'bg-primary text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Grid className="w-5 h-5" />
            Gallery Manager
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all shrink-0 ${
              activeTab === 'settings'
                ? 'bg-primary text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Settings className="w-5 h-5" />
            Site Images
          </button>
        </nav>

        <div className="p-4 border-t border-gray-100 hidden md:block">
          <button
            onClick={handleSignOut}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all w-full"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-6 md:p-10 max-w-7xl mx-auto">
          
          <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold font-quicksand text-foreground">
                {activeTab === 'gallery' ? 'Gallery Manager' : 'Site Images'}
              </h1>
              <p className="text-foreground/60 mt-2">
                {activeTab === 'gallery' 
                  ? 'Upload and manage images for the public gallery.' 
                  : 'Customize the images used across different sections of the website.'}
              </p>
            </div>
            
            {activeTab === 'gallery' && (
              <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100 flex items-center gap-2 text-sm font-medium text-foreground">
                <ImageIcon className="w-4 h-4 text-primary" />
                Total Images: <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-md">{images.length}</span>
              </div>
            )}
          </header>

          <AnimatePresence mode="wait">
            {activeTab === 'gallery' ? (
              <motion.div 
                key="gallery"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 xl:grid-cols-3 gap-8"
              >
                {/* Gallery Upload Form */}
                <div className="xl:col-span-1">
                  <div className="bg-white p-6 rounded-2xl shadow-ambient border border-white sticky top-10">
                    <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-4">
                      <div className="w-8 h-8 bg-pastel-yellow rounded-lg flex items-center justify-center">
                        <Upload className="w-4 h-4 text-foreground" />
                      </div>
                      <h2 className="text-lg font-bold text-gray-900">Upload New</h2>
                    </div>

                    <form onSubmit={handleUploadGallery} className="space-y-5">
                      {error && (
                        <div className="p-3 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100 flex gap-2">
                          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                          <p>{error}</p>
                        </div>
                      )}
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Image Files</label>
                        <div className="border-2 border-dashed border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition-colors group cursor-pointer relative">
                          <input
                            type="file"
                            accept="image/*"
                            multiple
                            ref={fileInputRef}
                            required
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                          />
                          <div className="flex flex-col items-center justify-center text-center gap-2">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                              <PlusCircle className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-700">Click or drag images here</p>
                              <p className="text-xs text-gray-500 mt-1">Supports JPG, PNG, WEBP. Select multiple!</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                        <select
                          value={newCategory}
                          onChange={(e) => setNewCategory(e.target.value)}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-gray-700"
                        >
                          <option value="Events">Events</option>
                          <option value="Classrooms">Classrooms</option>
                          <option value="Playground">Playground</option>
                          <option value="Activities">Activities</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        disabled={uploading}
                        className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl shadow-sm text-sm font-bold text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                      >
                        {uploading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Upload className="w-5 h-5" />}
                        {uploading ? 'Uploading to Server...' : 'Upload to Gallery'}
                      </button>
                    </form>
                  </div>
                </div>

                {/* Gallery Image List */}
                <div className="xl:col-span-2">
                  <div className="bg-white p-6 rounded-2xl shadow-ambient border border-white min-h-[500px]">
                    {loading ? (
                      <div className="flex flex-col justify-center items-center h-64 gap-4 text-primary">
                        <Loader2 className="w-10 h-10 animate-spin" />
                        <p className="text-sm font-medium text-gray-500">Loading your beautiful images...</p>
                      </div>
                    ) : images.length === 0 ? (
                      <div className="flex flex-col items-center justify-center h-64 text-gray-500 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                          <ImageIcon className="w-8 h-8 text-gray-300" />
                        </div>
                        <h3 className="font-bold text-gray-700">Gallery is Empty</h3>
                        <p className="text-sm mt-1">Upload your first image using the form.</p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                        {images.map((img) => (
                          <motion.div 
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            key={img.id} 
                            className="group relative rounded-2xl overflow-hidden border-4 border-gray-50 aspect-square bg-white shadow-sm hover:shadow-md transition-all"
                          >
                            <div className="absolute inset-0 bg-gray-100">
                              <Image src={img.url} alt="Gallery image" fill className="object-contain p-2" />
                            </div>
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4">
                              <div className="flex justify-between items-start">
                                <span className="inline-block px-3 py-1 bg-white text-gray-900 rounded-lg text-xs font-bold shadow-sm">
                                  {img.category}
                                </span>
                              </div>
                              <button
                                onClick={() => handleDeleteGallery(img.id, img.url)}
                                className="self-end p-2.5 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors shadow-sm transform hover:scale-105 active:scale-95"
                                title="Delete image"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="settings"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-ambient border border-white"
              >
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
                  <div className="w-10 h-10 bg-pastel-blue rounded-xl flex items-center justify-center">
                    <Settings className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 font-quicksand">Website Imagery</h2>
                    <p className="text-sm text-gray-500">Update the core visual assets used on the frontend.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  {/* Hero Image Setting */}
                  <div className="flex flex-col">
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Home Page Hero Image</h3>
                    <p className="text-sm text-gray-500 mb-4">This appears at the very top of the home page.</p>
                    
                    <div className="relative aspect-[16/10] bg-gray-50 rounded-2xl overflow-hidden mb-6 border-4 border-gray-100 shadow-inner group">
                      <Image 
                        src={siteSettings['hero_image'] || '/Hero Section VIdeo.png'} 
                        alt="Hero preview" 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 border border-black/5 rounded-xl pointer-events-none"></div>
                    </div>
                    
                    <label className="flex items-center justify-center gap-2 w-full py-3.5 px-4 border-2 border-dashed border-gray-300 rounded-xl text-sm font-bold text-gray-700 bg-white hover:bg-gray-50 hover:border-primary/50 hover:text-primary transition-all cursor-pointer">
                      {settingUploading === 'hero_image' ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <Upload className="w-5 h-5" />
                      )}
                      {settingUploading === 'hero_image' ? 'Uploading...' : 'Upload New Hero Image'}
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => e.target.files?.[0] && handleUpdateSiteSetting('hero_image', e.target.files[0])}
                        disabled={!!settingUploading}
                      />
                    </label>
                  </div>

                  {/* About Image Setting */}
                  <div className="flex flex-col">
                    <h3 className="font-bold text-gray-900 text-lg mb-1">About Section Image</h3>
                    <p className="text-sm text-gray-500 mb-4">This appears in the circular frame in the About section.</p>
                    
                    <div className="relative aspect-[16/10] bg-gray-50 rounded-2xl overflow-hidden mb-6 border-4 border-gray-100 shadow-inner flex items-center justify-center">
                      {/* Circle preview to match frontend */}
                      <div className="relative w-48 h-48 bg-white rounded-full shadow-lg overflow-hidden border-4 border-white group">
                        <Image 
                          src={siteSettings['about_image'] || '/logo.png'} 
                          alt="About preview" 
                          fill 
                          className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    
                    <label className="flex items-center justify-center gap-2 w-full py-3.5 px-4 border-2 border-dashed border-gray-300 rounded-xl text-sm font-bold text-gray-700 bg-white hover:bg-gray-50 hover:border-primary/50 hover:text-primary transition-all cursor-pointer">
                      {settingUploading === 'about_image' ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <Upload className="w-5 h-5" />
                      )}
                      {settingUploading === 'about_image' ? 'Uploading...' : 'Upload New About Image'}
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => e.target.files?.[0] && handleUpdateSiteSetting('about_image', e.target.files[0])}
                        disabled={!!settingUploading}
                      />
                    </label>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}
