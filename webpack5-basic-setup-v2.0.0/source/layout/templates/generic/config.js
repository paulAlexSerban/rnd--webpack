/* Atoms  */
 import { Link } from "../../../components/atoms/link/link.atom";
 import { Image } from "../../../components/atoms/image/image.atom";
 import { Text } from "../../../components/atoms/text/text.atom";

/* Molecules */
 import { List } from "../../../components/molecules/list/list.molecule";
 import { Teaser } from "../../../components/molecules/teaser/teaser.molecule";

/* Organisms */
 import { LinkList } from "../../../components/organisms/linklist/linklist.organism";
 import { TeaserList } from  "../../../components/organisms/teaserlist/teaserlist.organism";


export const config = {
  components: {
    LinkList: LinkList,
    List: List,
    Link: Link,
    TeaserList: TeaserList,
    Teaser: Teaser,
    Image: Image,
    Text: Text

  },
  selectors: {
    templateId: "#generic"
  }
}