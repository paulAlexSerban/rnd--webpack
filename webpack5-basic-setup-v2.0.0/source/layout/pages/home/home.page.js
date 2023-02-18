import "./home.page.scss";
import { config } from "./config";
import { onDomReady } from "../../../utils/dom/onDomReady";
import { findOne } from "../../../utils/dom/find";

const HomePage = () => {
  const pageEl = findOne(config.selectors.pageId);
}

onDomReady(HomePage);