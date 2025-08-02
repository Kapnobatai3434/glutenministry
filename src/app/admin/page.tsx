import { redirect } from 'next/navigation'

export default function AdminPage() {
  // Server-side redirect to the static admin interface
  redirect('/admin/index.html')
}