import { ElementType, Suspense } from "react";

// project import
import Loader from "./Loader";

// ==============|| Loadable - Lazy Loading ||=================== //

const Loadable = (Component) => (props) => (
    <Suspense fallback={<Loader />}>
        <Component {...props} />
    </Suspense>
);

export default Loadable;