const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer>
      <p> © {year} Aguamaril.com All rights reserved</p>
    </footer>
  );
}
