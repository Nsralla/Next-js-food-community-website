import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import Meal from "./[mealSlug]/page";

async function Meals() {
    const meals = await getMeals();
    return <MealsGrid meals={meals} />;
}
export default  async function MealsPage() {
    
    return (
       <>
            <header className={classes.header}>
                <h1>
                    Delicious means, created{' '}
                    <span className={classes.highlight}>just for you</span>
                </h1>
                <p>Choose your favorite recipe and cook it yourself, It is easy and fun!</p>
                <p className={classes.cta}>
                    <Link href="/meals/share">Share your favorite recipe</Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={ <p className={classes.loading}>Fetching meals...</p>}>
                    <Meals/>
                </Suspense>
            </main>
       </>
    );
}