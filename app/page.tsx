import { css } from '../styled-system/css'

export default function Home() {
  return (
    <main className={css({
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem',
    })}>
      {/* Hero Section */}
      <section className={css({
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '2rem',
        padding: '4rem 0',
      })}>
        <h1 className={css({
          fontSize: '4.5rem',
          fontWeight: 'bold',
          lineHeight: '1.2',
          maxWidth: '800px',
          background: 'linear-gradient(to right, #00f5a0, #00d9f5)',
          backgroundClip: 'text',
          color: 'transparent',
        })}>
          Building the Future of Low-Code Development
        </h1>
        <p className={css({
          fontSize: '1.5rem',
          color: 'neutral.400',
          maxWidth: '600px',
        })}>
          Empowering developers and businesses to create powerful applications with minimal coding. Our next-generation platform makes software development accessible to everyone.
        </p>
        <div className={css({
          display: 'flex',
          gap: '1rem',
          marginTop: '2rem',
        })}>
          <button className={css({
            padding: '1rem 2rem',
            borderRadius: '0.5rem',
            background: 'linear-gradient(to right, #00f5a0, #00d9f5)',
            color: 'neutral.950',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            border: 'none',
            cursor: 'pointer',
            transition: 'transform 0.2s',
            _hover: {
              transform: 'translateY(-2px)',
            },
          })}>
            Get Started
          </button>
          <button className={css({
            padding: '1rem 2rem',
            borderRadius: '0.5rem',
            background: 'transparent',
            color: 'neutral.50',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            border: '2px solid',
            borderColor: 'neutral.600',
            cursor: 'pointer',
            transition: 'all 0.2s',
            _hover: {
              borderColor: 'neutral.400',
              color: 'neutral.200',
            },
          })}>
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className={css({
        padding: '6rem 0',
      })}>
        <h2 className={css({
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '3rem',
          textAlign: 'center',
        })}>
          Why Choose Our Platform
        </h2>
        <div className={css({
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        })}>
          {[
            {
              title: 'Visual Development',
              description: 'Build applications through intuitive drag-and-drop interfaces and visual workflows.',
              icon: '🎨',
            },
            {
              title: 'AI-Powered Assistance',
              description: 'Leverage artificial intelligence to accelerate development and improve code quality.',
              icon: '🤖',
            },
            {
              title: 'Enterprise Ready',
              description: 'Scalable, secure, and compliant solutions for businesses of all sizes.',
              icon: '🏢',
            },
          ].map((feature, index) => (
            <div key={index} className={css({
              padding: '2rem',
              borderRadius: '1rem',
              background: 'neutral.900',
              border: '1px solid',
              borderColor: 'neutral.800',
              transition: 'transform 0.2s',
              _hover: {
                transform: 'translateY(-5px)',
                borderColor: 'neutral.700',
              },
            })}>
              <div className={css({
                fontSize: '2.5rem',
                marginBottom: '1rem',
              })}>
                {feature.icon}
              </div>
              <h3 className={css({
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
              })}>
                {feature.title}
              </h3>
              <p className={css({
                color: 'neutral.400',
                lineHeight: '1.6',
              })}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={css({
        padding: '6rem 0',
        textAlign: 'center',
      })}>
        <h2 className={css({
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
        })}>
          Ready to Transform Your Development Process?
        </h2>
        <p className={css({
          fontSize: '1.2rem',
          color: 'neutral.400',
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem',
        })}>
          Join thousands of developers and businesses who are already building the future with our platform.
        </p>
        <button className={css({
          padding: '1rem 2.5rem',
          borderRadius: '0.5rem',
          background: 'linear-gradient(to right, #00f5a0, #00d9f5)',
          color: 'neutral.950',
          fontWeight: 'bold',
          fontSize: '1.2rem',
          border: 'none',
          cursor: 'pointer',
          transition: 'transform 0.2s',
          _hover: {
            transform: 'translateY(-2px)',
          },
        })}>
          Start Your Free Trial
        </button>
      </section>
    </main>
  )
}
