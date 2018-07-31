import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { AppNavbar } from '../_components';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <Container>
          <h1>About</h1>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec molestie nulla ipsum, eu condimentum purus ultricies quis. Curabitur fermentum porttitor posuere. Nam hendrerit odio non lobortis consequat. Aenean accumsan posuere nisi, sed elementum ex tempor vel. Sed pulvinar est enim, id euismod tellus volutpat quis. Donec semper, urna eget efficitur facilisis, ipsum nisi tempus libero, rutrum finibus ante urna quis est. Nam pulvinar tellus in neque blandit pretium. Quisque mollis sapien vitae magna tempor blandit. Maecenas ultrices purus convallis massa porta, nec volutpat risus sodales.
          </p>
          <p>
            Nulla scelerisque malesuada dui a congue. Suspendisse sit amet commodo quam, in pulvinar sem. Phasellus quis iaculis lectus. Etiam elementum commodo orci. In pulvinar consectetur imperdiet. Vivamus sem odio, semper quis augue a, tempus ultricies nulla. Mauris nec odio ullamcorper, sollicitudin est nec, pulvinar sapien. Donec cursus lobortis fermentum. Curabitur ac est augue. Nunc placerat aliquam diam mollis pharetra.
          </p>
          <p>
            In eu viverra turpis. Nullam tempus vestibulum rutrum. Mauris dui lectus, feugiat non semper eget, suscipit efficitur purus. Aenean ac lacus dapibus, mollis eros ac, efficitur magna. Quisque placerat sit amet urna non dignissim. Quisque mattis cursus nunc, eget semper ex porta et. Cras a sapien vel purus pharetra pellentesque. Pellentesque pulvinar pellentesque mi, id tempor nisl vehicula at. Nullam sit amet commodo odio. Nullam erat enim, pulvinar et maximus nec, gravida ac nisl.
          </p>
          <p>
            Curabitur eu arcu massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sed tincidunt mi. Integer commodo metus eu nisl cursus tempor. Sed vel nisl at augue commodo pretium. Suspendisse sed turpis fringilla, laoreet odio vitae, dignissim magna. Etiam vel enim leo. Suspendisse ut ligula diam. Nullam lacinia dui felis, at scelerisque enim laoreet sit amet.
          </p>
          <p>
            Donec mollis nibh id nibh cursus, ac consectetur felis suscipit. Sed aliquet venenatis nibh, eget volutpat enim. In dui dolor, consequat vel magna iaculis, tincidunt suscipit turpis. Etiam malesuada sem quis nulla rhoncus, vitae tempus risus feugiat. Maecenas pharetra urna vel metus mollis vulputate. Sed elit lorem, molestie et eros sit amet, accumsan aliquet ipsum. Nulla tincidunt, nisl vitae tempus iaculis, neque dui ullamcorper purus, eget lobortis lacus odio vitae mi. Nam efficitur porttitor est, nec dapibus sem tristique at. Maecenas quis auctor justo. Sed nunc erat, eleifend id sapien a, molestie ullamcorper eros.
          </p>
        </Container>
      </div>
    );
  }
}
