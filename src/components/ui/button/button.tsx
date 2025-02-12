type Button = { children: React.ReactNode }


export function Button({ children }: Button) {
  return (
    <div
      style={{
        padding: '0.375rem 0.75rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        border: 'solid #4b4b4b',
        borderWidth: 1,
        borderRadius: '0.375rem',
        backgroundColor: 'rgba(52 52 52, 0.6)',
        backdropFilter: 'blur(4px)', 
        color: '#ffffff',
        fontWeight: 500,
      }}
    >{children}</div>
  )
}