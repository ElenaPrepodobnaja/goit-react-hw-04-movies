import { Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from './component/Navigation';

const Home = lazy(() =>
  import('./component/Home' /*webpackChunkName: "Home"*/),
);
const Movies = lazy(() =>
  import('./component/Movies' /*webpackChunkName: "Movies"*/),
);
const MovieDetail = lazy(() =>
  import('./component/MovieDetail' /*webpackChunkName:"MovieDetail"*/),
);
const NotFound = lazy(() =>
  import('./component/NotFound' /*webpackChunkName: "NotFound"*/),
);

export default function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<h1>Загрузка...</h1>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies/:movieId" component={MovieDetail} />
          <Route path="/movies" component={Movies} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  );
}


