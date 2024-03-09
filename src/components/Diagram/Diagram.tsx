import Image from "next/image";
import DiagramImg from "../../../public/diagram.png";
import styles from "./Diagram.module.css";

export default function Diagram() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textContainer}>
        <p>
          В десятилетнем исследовании<strong>«Генетическая эпидемиология ХОБЛ» (COPDGene)</strong> среди пациентов с ХОБЛ, диагностированной до 55
          лет, было выявлено <strong>преобладание женщин (66%),</strong> а в возрасте 60-64 лет количество женщин и мужчин.
        </p>
        <p>
          Такое эпидемиологическое распределение заболеваемости ХОБЛ может быть связано с тем, что дыхательные пути курящих женщин имеют более
          <strong>высокий процент площади стенок, </strong> но меньшую площадь просвета, внутренний диаметр и толщину дыхательных путей по сравнению с
          курящими мужчинами.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image src={DiagramImg} alt="diagram" />
      </div>
    </div>
  );
}
