import React from "react";
import PropTypes from "prop-types"; // cài component prop-types
function ColorBox(props) {
  const { color } = props;
  return <div className="box" style={{ backgroundColor: color }}></div>;
}
// khai báo tất cả các thuộc tính truyền vào ở đây
ColorBox.propTypes = {
  // nếu thuộc tính đó bắt buộc phải có thì thêm .isRequired vào
  color: PropTypes.string.isRequired,
  //nếu thuộc tính đó k bắt buộc có thì k cần thêm .isRequired
  rounded: PropTypes.bool,
};
// đặt giá trị mặc đinh đối vs các thuộc tính k bắt buộc, nếu nó k truyền vào thì sẽ lấy giá trị mặc định này
ColorBox.defaultProps = {
  rounded: true,
};
export default ColorBox;
