export default function User({ user: { photoURL, displayName } }) {
  return (
    <div className="flex items-center shrink-0">
      <img className="w-10 h-10 rounded-full mr-2" src={photoURL} alt="" />
      <p className="hidden md:block">{displayName}</p>
    </div>
  );
}
