const Api = {
  async loadMembers(){
    const result = await fetch('https://api.github.com/orgs/futurebrand/members')
      .then( response => response.json())
      .then(data => data)
    return result
  }
}

export default Api;
