import Image from "next/image";

import HeartImg from "../../../public/icons/heart.svg";
import PeopleImg from "../../../public/icons/people.svg";
import OrganImg from "../../../public/icons/Group (6).svg";

import styles from "./Statistic.module.css";

export default function Statistic() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textContainer}>
        <p className={styles.strongText}>
          Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение 3 лет у 77%
          пациентов1.
        </p>
        <p>
          В течение 5 лет после первого тяжёлого обострения в живых остаются только 40% пациентов.2 Прогноз после обострений ХОБЛ схож с таковым при
          сердечной недостаточности, инфаркте миокарда и некоторых злокачественных опухолях.
        </p>
      </div>
      <h2 className={styles.heading}>Пятилетняя выживаемость пациентов</h2>

      <ul className={styles.grid}>
        <li>
          <article className={styles.card}>
            <div className={styles.cardIcon}>
              <Image src={HeartImg} alt="heart" />
            </div>
            <h3>55,3%</h3>
            <p>
              пациентов с <strong>инфарктом миокарда1</strong>
            </p>
            <p className={styles.descriprition}>Апостериорный анализ когортного исследования (N=2887)</p>
          </article>
        </li>
        <li>
          <article className={styles.card}>
            <Image src={PeopleImg} alt="people" />
            <h3>45,5%</h3>
            <p>
              пациентов с <strong>сердечной недостаточностью1</strong>
            </p>
            <p className={styles.descriprition}>Популяционное когортное исследование (N=385)</p>
          </article>
        </li>
        <li>
          <article className={styles.card}>
            <Image src={OrganImg} alt="organ" />
            <h3>50,5%</h3>
            <p>
              пациентов с <strong> раком мочевого пузыря</strong>
            </p>
            <p className={styles.descriprition}>Исследование Национальной статистической службы (N=42642)</p>
          </article>
        </li>
      </ul>
    </div>
  );
}
