import { css } from '../styled-system/css'
import Link from 'next/link'

export default function Header() {
  return (
    <header className={css({
      width: '100%',
      padding: '1rem 2rem',
      background: 'neutral.950',
      borderBottom: '1px solid',
      borderColor: 'neutral.800',
      position: 'sticky',
      top: '0',
      zIndex: '50',
    })}>
      <div className={css({
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      })}>
        <Link href="/" className={css({
          fontSize: '1.5rem',
          fontWeight: 'bold',
          background: 'linear-gradient(to right, #00f5a0, #00d9f5)',
          backgroundClip: 'text',
          color: 'transparent',
          textDecoration: 'none',
        })}>
          Long Soft
        </Link>
        
        <nav className={css({
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
        })}>
          <Link href="/features" className={css({
            color: 'neutral.300',
            textDecoration: 'none',
            transition: 'color 0.2s',
            _hover: {
              color: 'neutral.100',
            },
          })}>
            Features
          </Link>
          <Link href="/pricing" className={css({
            color: 'neutral.300',
            textDecoration: 'none',
            transition: 'color 0.2s',
            _hover: {
              color: 'neutral.100',
            },
          })}>
            Pricing
          </Link>
          <Link href="/docs" className={css({
            color: 'neutral.300',
            textDecoration: 'none',
            transition: 'color 0.2s',
            _hover: {
              color: 'neutral.100',
            },
          })}>
            Documentation
          </Link>
          <button className={css({
            padding: '0.5rem 1.5rem',
            borderRadius: '0.5rem',
            background: 'linear-gradient(to right, #00f5a0, #00d9f5)',
            color: 'neutral.950',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer',
            transition: 'transform 0.2s',
            _hover: {
              transform: 'translateY(-2px)',
            },
          })}>
            Sign In
          </button>
        </nav>
      </div>
    </header>
  )
}
