import CustomLink from "../components/CustomLink/CustomLink";
import HeadingArticle from "../components/HeadingArticle/HeadingArticle";
import UserIcon from "../../public/icons/user.svg";
import ArrowIcon from "../../public/icons/arrow.svg";
import SprayIcon from "../../public/icons/spray.svg";
import ArroHint from "../../public/icons/hint-arrow.svg";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <article className={styles.article}>
        <HeadingArticle title="ХОБЛ: мифы и реальность" />
        <ul className={styles.links}>
          <li>
            <CustomLink to="/diagram">
              <div className={styles.iconContainer}>
                <Image src={UserIcon} alt="user-icon" />
              </div>
              <div className={styles.question}>
                <p>
                  ХОБЛ болеют <strong>преимущественно мужчины?</strong>
                </p>
              </div>
              <div className={styles.text}>
                <p>В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ,</p>
                <span> диагностированной до 55 лет, выявлено преобладание... </span>
              </div>
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/statistic">
              <div className={styles.iconContainer}>
                <Image src={ArrowIcon} alt="user-icon" />
              </div>
              <div className={styles.question}>
                <p>
                  <strong>Опасно</strong> не наличие заболевания, а обострения?
                </p>
              </div>
              <div className={styles.text}>
                <p>Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение </p>
                <span>случится в течение...</span>
              </div>
            </CustomLink>
          </li>
        </ul>
      </article>
      <article className={styles.article}>
        <HeadingArticle title="Терапия ХОБЛ: что в фокусе?" />

        <div className={styles.highlight}>
          <p>Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии</p>
        </div>
        <p className={styles.subheading}>Приоритетные направления фармакотерапевтической стратегии при ХОБЛ1:</p>

        <ul className={styles.grid}>
          <li>
            <article className={styles.card}>
              <div className={styles.icon}>
                <Image src={SprayIcon} alt="spray" />
                <span>1</span>
              </div>
              <h3>
                Ингаляционный <strong>антихолинергик</strong>
              </h3>
              <p>
                Ингибирует бронхоконстрикторные эффекты ацетилхолина, вступая с ним в конкурентный антагонизм за взаимодействие с эффекторными
                мускариновыми рецепторами, дополняет и потенцирует эффект β2-агонистов1
              </p>
            </article>
          </li>
          <li>
            <article className={styles.card}>
              <div className={styles.icon}>
                <Image src={SprayIcon} alt="spray" />
                <span>2</span>
              </div>
              <h3>
                Ингаляционный <strong>β2-агонист</strong>
              </h3>
              <p>
                Вызывает бронходилатацию посредством релаксации гладкомышечных клеток бронхов независимо от характера констриктивных стимулов, т. е.
                выступают в качестве функциональных антагонистов бронхоконстрикции
              </p>
            </article>
          </li>
          <li>
            <article className={styles.card}>
              <div className={styles.icon}>
                <Image src={SprayIcon} alt="spray" />
                <span>3</span>
              </div>
              <h3>
                Ингаляционный <strong>глюкокортикостероид</strong> (ИГКС)
              </h3>
              <p>
                Снижает частоту обострений, особенно в сочетании с ДДБА, подавляют хроническое воспаление при астме и снижают гиперреактивность
                дыхательных путей
              </p>
            </article>
          </li>
        </ul>
        <div className={styles.arrows}>
          <div>
            <Image src={ArroHint} alt="arrow-down" />
          </div>
          <div>
            <Image src={ArroHint} alt="arrow-down" />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.cardDescription}>
            <p>
              Пациентам с ХОБЛ рекомендуется комбинирование бронходилататоров с разными механизмами действия; Назначение 2-х бронходилататоров из
              группы длительнодействующих β2-агонистов (ДДБА) и длительнодействующих антихолинергиков (ДДАХ), действие которых дополняет и усиливает
              друг друга1.
            </p>
          </div>
          <div className={styles.cardDescription}>
            <p>
              Пациентам с ХОБЛ рекомендуется комбинирование бронходилататоров с разными механизмами действия; Назначение 2-х бронходилататоров из
              группы длительнодействующих β2-агонистов (ДДБА) и длительнодействующих антихолинергиков (ДДАХ), действие которых дополняет и усиливает
              друг друга1.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
