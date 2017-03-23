import React from 'react';

const buttonStyles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
};

const Button = ({ children, onClick, style = {} }) => (
  <button
    style={{ ...buttonStyles, ...style }}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
  style: React.PropTypes.object,
};

const AdminButton = () => (<Button>loaded async changed snyggt</Button>);

export {
  Button,
};

export default AdminButton;

export const fillerObjectToBeVisibleOnBundleAnalyzer = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis quam nec finibus rutrum. In a ornare justo. Pellentesque a ligula sollicitudin, scelerisque ex ac, placerat mi. Morbi vel dolor erat. Suspendisse rutrum nisi sit amet maximus varius. Vestibulum feugiat elementum odio quis vulputate. Donec congue lectus quis dignissim dictum. In pulvinar ipsum ut porta rhoncus. Etiam sed augue et sem efficitur sodales.Vivamus vitae odio et purus placerat fermentum. Vestibulum ante enim, hendrerit quis dolor id, pretium porttitor erat. Sed malesuada placerat lorem tempus dignissim. Sed ac tempus libero. Aenean mauris mauris, ultricies tempor nisi sit amet, rhoncus ultrices massa. Vestibulum vel erat rutrum, volutpat nisi nec, eleifend mauris. Proin enim sapien, lobortis non nibh at, hendrerit pellentesque magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.    Aenean vel nunc metus. Vivamus ac lectus mattis quam varius efficitur. Aliquam euismod sit amet urna ut maximus. Nam in efficitur purus. Aliquam egestas dolor nisi, at dignissim tellus vestibulum vel. Aenean eu lacinia dolor, quis tincidunt sapien. Nulla vitae arcu arcu. Proin odio risus, aliquam in congue vitae, viverra a sapien. Donec ullamcorper eu nunc in commodo. Ut ac pretium lorem.   Morbi vel ante id massa semper congue vel vitae nibh. Maecenas efficitur cursus dui, id cursus dolor ultrices sed. Pellentesque rhoncus justo nunc, eu blandit risus placerat eu. Praesent nec nisi nibh. Nullam non rutrum urna. Mauris vel semper felis. Nullam sapien ante, ultricies id magna vulputate, volutpat sodales magna.   Duis vel aliquam nunc. Duis orci ligula, euismod id nunc non, consequat venenatis odio. Sed vitae tristique nisi. Donec facilisis, est at bibendum tempor, urna dui vulputate arcu, ut pharetra ipsum turpis id mauris. Duis eu sollicitudin augue, non hendrerit velit. Vestibulum sit amet quam ultrices, dictum turpis eu, suscipit nisi. In imperdiet elit vel tristique egestas. Nulla felis mi, maximus ac mi et, viverra vestibulum turpis. Cras eget vehicula erat, eu ultrices quam. Pellentesque lacinia eros in sapien scelerisque, et semper elit finibus. Proin quis nunc eget turpis sollicitudin sagittis ut eget urna. Duis elit elit, sollicitudin at erat quis, malesuada efficitur nisi."
];
