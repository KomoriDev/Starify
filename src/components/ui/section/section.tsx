type Section = { 
  styles?:  React.StyleHTMLAttributes<SVGSVGElement>['style']
  children: React.ReactNode 
}


export function Section({ styles, children }: Section) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        columnGap: '0.75rem',
        position: 'relative',
        ...styles,
      }}
    >{children}</div>
  )
}