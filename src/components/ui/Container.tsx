import clsx from "clsx"

export default function Container({
                                    children,
                                    className,
                                    id
                                  }: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  return <div id={id} className={clsx('container-gutter', className)}>{children}</div>
}