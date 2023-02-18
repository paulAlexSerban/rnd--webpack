import "./generic.template.scss";

import { config } from "./config";
import { componentLoader } from "../../../utils/common/componentLoader";
import { onDomReady } from "../../../utils/dom/onDomReady";
import { findOne } from "../../../utils/dom/find";

const GenericTemplate = () => {
  const templateEl = findOne(config.selectors.templateId);
  componentLoader(config.components);
};

onDomReady(GenericTemplate);
