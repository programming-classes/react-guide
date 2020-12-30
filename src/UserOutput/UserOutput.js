import { Component } from "react";

class UserOutput extends Component {
  render() {
    return (
      <div>
        <p>{this.props.username}</p>
        <p>
          Vestibulum mauris mi, maximus tincidunt gravida maximus, tristique
          quis ante. Nam sagittis, augue sit amet hendrerit sollicitudin, nibh
          urna semper libero, a gravida ex libero sed nulla. Duis ullamcorper
          enim luctus, pulvinar libero vitae, tristique dui. Aliquam ullamcorper
          sollicitudin finibus. Cras non pulvinar ante, vitae cursus magna. Nam
          rhoncus venenatis mauris, maximus rutrum erat tempus viverra. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Duis scelerisque vestibulum iaculis. Nullam
          dictum, turpis sed ultrices tincidunt, nibh nulla posuere nisi, ut
          suscipit augue tellus et tellus. Nunc vel suscipit libero. Nulla porta
          iaculis ex a pulvinar. Cras lobortis posuere vulputate. In ut interdum
          urna. Nam vestibulum lorem non pharetra facilisis. Generados
        </p>
      </div>
    );
  }
}

export default UserOutput;
