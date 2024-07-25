import PropTypes, { InferProps } from "prop-types";

import { LocationFragmentPropType } from "@/models/LocationFragment";

export function Location({
  className,
  fragment,
}: InferProps<typeof Location.propTypes>) {
  return (
    <div
      data-aue-type="Location"
      data-aue-prop="Location"
      data-aue-resource={`urn:aemconnection:${fragment._path}/jcr:content/data/master`}
      className={`location ${className}`}
    >
      <h1>{fragment.locationType}</h1>
    </div>
  );
}

Location.propTypes = {
  className: PropTypes.string,
  fragment: LocationFragmentPropType.isRequired,
};
