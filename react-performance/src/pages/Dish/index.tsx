import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import { lazy } from "react";
import styles from "./Dish.module.scss";
import menu from "../../data/menu.json";

const DishTag = lazy(() => import("../../components/DishTag"));
const NotFound = lazy(() => import("../NotFound"));
const DefaultPage = lazy(() => import("../../components/DefaultPage"));

const Dish = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dish = menu.find((item) => item.id === Number(id));

  if (!dish) return <NotFound />;

  return (
    <Routes>
      <Route path="*" element={<DefaultPage />}>
        <Route
          index
          element={
            <>
              <button className={styles.goBack} onClick={() => navigate(-1)}>
                {"< Voltar"}
              </button>
              <section className={styles.container}>
                <h1 className={styles.title}>{dish.title}</h1>
                <div className={styles.image}>
                  <img src={dish.photo} alt={dish.title} />
                </div>
                <div className={styles.content}>
                  <p className={styles.contentDescription}>
                    {dish.description}
                  </p>
                  <DishTag dish={dish} />
                </div>
              </section>
            </>
          }
        />
      </Route>
    </Routes>
  );
};

export default Dish;
