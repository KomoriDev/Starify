type Text = { 
  variant: 'title' | 'label' | 'text' | 'counter'
  children: React.ReactNode 
}

const VARIANTS = {
  title: {
    color: '#fff',
    fontSize: '1.25rem',
    // fontWeight: 800,
    fontFamily: '"OpenSans"',
    lineHeight: '1.75rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  label: {
    padding: '0.125rem 0.5rem',
    marginRight: '0.75rem',
    color: '#8c9599',
    border: 'solid #383737',
    borderWidth: 1,
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: 500,
  },
  text: {
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
  },
  counter: {
    margin: '-0.375rem 0',
    padding: '0.125rem 0.5rem',
    fontSize: '0.75rem',
    fontWeight: 500,
    borderRadius: '9999px',
    backgroundColor: 'rgba(67, 67, 67, 0.5)',
  }
} as const

export function Text({ variant, children }: Text) {
  return (
    <span style={VARIANTS[variant]}>{children}</span>
  )
}