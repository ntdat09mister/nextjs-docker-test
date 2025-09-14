export default function Home() {
  return (
    <main style={{
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <h1 style={{
        color: '#0070f3',
        fontSize: '3rem',
        marginBottom: '1rem'
      }}>
        🚀 Next.js Docker Test
      </h1>
      
      <p style={{
        fontSize: '1.2rem',
        marginBottom: '2rem',
        color: '#333'
      }}>
        Ứng dụng Next.js chạy trên Node.js 20 với Docker
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1rem',
        marginTop: '2rem'
      }}>
        <div style={{
          border: '1px solid #eaeaea',
          borderRadius: '8px',
          padding: '1.5rem',
          backgroundColor: 'white'
        }}>
          <h3 style={{ color: '#0070f3' }}>⚡ Server Info</h3>
          <p>Node.js: {process.version}</p>
          <p>Environment: {process.env.NODE_ENV}</p>
          <p>Platform: {process.platform}</p>
        </div>

        <div style={{
          border: '1px solid #eaeaea',
          borderRadius: '8px',
          padding: '1.5rem',
          backgroundColor: 'white'
        }}>
          <h3 style={{ color: '#0070f3' }}>🐳 Docker Ready</h3>
          <p>Standalone build enabled</p>
          <p>Production optimized</p>
          <p>Alpine Linux compatible</p>
        </div>
      </div>

      <div style={{
        marginTop: '3rem',
        padding: '1.5rem',
        backgroundColor: '#f0f8ff',
        borderRadius: '8px',
        border: '1px solid #0070f3'
      }}>
        <h3>✅ Build Test Success</h3>
        <p>Nếu bạn thấy trang này, Docker build đã thành công!</p>
        <p style={{ fontSize: '0.9rem', color: '#666' }}>
          Build time: {new Date().toISOString()}
        </p>
      </div>
    </main>
  )
}
