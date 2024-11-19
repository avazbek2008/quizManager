import { EventHandler } from "./assets/components/EventHandler.js";
import { QuizManager } from "./assets/components/QuizManager.js";

const quizManager = new QuizManager();
const eventHandler = new EventHandler(quizManager);
eventHandler.init();