import { css } from '../styled-system/css'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={css({
      width: '100%',
      padding: '4rem 2rem',
      background: 'neutral.950',
      borderTop: '1px solid',
      borderColor: 'neutral.800',
    })}>
      <div className={css({
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '4rem',
      })}>
        <div>
          <h3 className={css({
            fontSize: '1.5rem',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #00f5a0, #00d9f5)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: '1rem',
          })}>
            Long Soft
          </h3>
          <p className={css({
            color: 'neutral.400',
            lineHeight: '1.6',
          })}>
            Building the next-generation low-code/no-code programming software for modern businesses.
          </p>
        </div>

        <div>
          <h4 className={css({
            fontSize: '1.1rem',
            fontWeight: 'bold',
            color: 'neutral.100',
            marginBottom: '1rem',
          })}>
            Product
          </h4>
          <ul className={css({
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          })}>
            {['Features', 'Pricing', 'Documentation', 'Roadmap'].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase()}`} className={css({
                  color: 'neutral.400',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  _hover: {
                    color: 'neutral.100',
                  },
                })}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className={css({
            fontSize: '1.1rem',
            fontWeight: 'bold',
            color: 'neutral.100',
            marginBottom: '1rem',
          })}>
            Company
          </h4>
          <ul className={css({
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          })}>
            {['About', 'Careers', 'Blog', 'Contact'].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase()}`} className={css({
                  color: 'neutral.400',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  _hover: {
                    color: 'neutral.100',
                  },
                })}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className={css({
            fontSize: '1.1rem',
            fontWeight: 'bold',
            color: 'neutral.100',
            marginBottom: '1rem',
          })}>
            Legal
          </h4>
          <ul className={css({
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          })}>
            {['Privacy', 'Terms', 'Security'].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase()}`} className={css({
                  color: 'neutral.400',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  _hover: {
                    color: 'neutral.100',
                  },
                })}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={css({
        maxWidth: '1200px',
        margin: '4rem auto 0',
        paddingTop: '2rem',
        borderTop: '1px solid',
        borderColor: 'neutral.800',
        textAlign: 'center',
        color: 'neutral.500',
      })}>
        <p>© {new Date().getFullYear()} Long Soft, Ltd. All rights reserved.</p>
      </div>
    </footer>
  )
}
