export default function User({ user: { photoURL, displayName } }) {
  return (
    <div>
      <img src={photoURL} alt="" />
      <strong>{displayName}</strong>
    </div>
  );
}
