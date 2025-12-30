export default function NoteEmbed({ hash }: { hash: string }) {
  return (
    <iframe
      src={`https://note.com/embed/notes/${hash}`}
      style={{
        border: 0,
        display: 'block',
        maxWidth: '99%',
        width: '494px',
        padding: '0px',
        margin: '10px 0px',
      }}
      height="400"
      loading="lazy"
    />
  )
}