import PropTypes, { InferProps } from "prop-types";

import { Location } from "../Location";

export function PageBuilder({
  className = "",
  fragment,
}: InferProps<typeof PageBuilder.propTypes>) {
  if (fragment == null) {
    return <></>;
  }

  switch (fragment.__typename) {
    case "LocationModel":
      return <Location className={className} fragment={fragment} />;
    default:
      return <></>;
  }
}

PageBuilder.propTypes = {
  className: PropTypes.string,
  fragment: PropTypes.shape({
    __typename: PropTypes.string.isRequired,
  }),
};
