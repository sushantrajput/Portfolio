/**
 * Renders text, turning {{...}} into a highlighted "replace me" chip.
 * Lets content.js stay plain strings.
 */
export const Fill = ({ text }) => {
  if (!text) return null;
  const parts = String(text).split(/(\{\{[^}]*\}\})/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("{{") ? (
          <mark key={i} className="fillme">
            {p.slice(2, -2)}
          </mark>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
};
