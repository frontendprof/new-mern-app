export default function Footer() {
  const getCurrentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-3">
      <div className="container mx-auto text-center">
        <p className="text-sm">MernTech &copy; {getCurrentYear}</p>
      </div>
    </footer>
  );
}
