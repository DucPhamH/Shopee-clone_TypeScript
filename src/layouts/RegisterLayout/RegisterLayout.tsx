import Footer from 'src/components/Footer'
import RegisterHeader from 'src/components/RegisterHeader'

interface Prop {
  children?: React.ReactNode
}
export default function RegisterLayout({ children }: Prop) {
  return (
    <div>
      <RegisterHeader />
      {children}
      <Footer />
    </div>
  )
}
