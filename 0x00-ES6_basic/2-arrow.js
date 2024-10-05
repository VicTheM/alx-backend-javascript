export default function getNeighborhoodList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'UNION SQUARE'];

  const self = this;
  this.addNeighborhood = (newNeighborhood) => {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
