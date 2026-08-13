declare module '*.jpeg' {
  const content: import('next/image').StaticImageData
  export default content
}
