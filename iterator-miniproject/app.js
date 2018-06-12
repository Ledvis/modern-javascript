const data = [{
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/17.jpg'
  },
  {
    name: 'Sussy Williams',
    age: 29,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    name: 'Bruce Lawson',
    age: 41,
    gender: 'male',
    lookingfor: 'female',
    location: 'New York WD',
    image: 'https://randomuser.me/api/portraits/men/22.jpg'
  }
];

function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next() {
      return nextIndex < profiles.length ? {
        value: profiles[nextIndex++],
        done: false
      } : {
        done: true
      };
    }
  }
}

const profiles = profileIterator(data);

nextProfile();

function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile) {
    document.querySelector('#profileDisplay').innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Location: ${currentProfile.location}</li>
      <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
    </ul>
  `;

    document.querySelector('#imageDisplay').innerHTML = `
    <img src="${currentProfile.image}"/>
  `;
  } else {
    window.location.reload();
  }
}

document.querySelector('#next').addEventListener('click', nextProfile);