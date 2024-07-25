import { Fragment } from "./Fragment";
import PropTypes from "prop-types";

export interface LocationFragment extends Fragment {
  __typename: "LocationModel";
  _path: string;
  locationType: string;
}

export const LocationFragmentPropType = PropTypes.shape({
  _path: PropTypes.string,
  locationType: PropTypes.string,
});
