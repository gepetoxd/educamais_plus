import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { InitialDiagnosis } from "./components/InitialDiagnosis";
import { Dashboard } from "./components/Dashboard";
import { LearningPaths } from "./components/LearningPaths";
import { LearningPathDetail } from "./components/LearningPathDetail";
import { Planner } from "./components/Planner";
import { Library } from "./components/Library";
import { Diary } from "./components/Diary";
import { Profile } from "./components/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Login },
      { path: "register", Component: Register },
      { path: "diagnosis", Component: InitialDiagnosis },
      { path: "dashboard", Component: Dashboard },
      { path: "learning-paths", Component: LearningPaths },
      { path: "learning-paths/:id", Component: LearningPathDetail },
      { path: "planner", Component: Planner },
      { path: "library", Component: Library },
      { path: "diary", Component: Diary },
      { path: "profile", Component: Profile },
    ],
  },
]);
