import "./Footer.css";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer>
      <p className="footer-text"> © {year} Aguamaril.com All rights reserved</p>
    </footer>
  );
}
