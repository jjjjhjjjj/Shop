export default function Button({ text, onClick }) {
  return (
    <button
      className="bg-teal-400 bg-brand text-white py-2 px-4 rounded-sm hover:brightness-110"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
