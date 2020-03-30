<template>
  <div>
    <nav class="navbar has-shadow">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="images/icon.png">
        </a>
        <div class="navbar-burger burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item">
            <div>
              <small>Sample Online Lesson</small>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <div class="navbar-link">
              Student Name #John Doe
            </div>
            <div class="navbar-dropdown is-right">
              <a class="navbar-item">
                <div>
                  <span class="icon is-small">
                    <font-awesome-icon :icon="['fas', 'user-circle']"/>
                  </span>
                  Profile
                </div>
              </a>
              <a class="navbar-item">
                <div>
                  <span class="icon is-small">
                    <font-awesome-icon :icon="['fa', 'question']"/>
                  </span>
                  Ask a Question
                </div>
              </a>
              <a class="navbar-item">
                <div>
                  <span class="icon is-small">
                    <font-awesome-icon :icon="['fa', 'sign-out-alt']"/>
                  </span>
                  Sign Out
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <section class="section has-background-light">
      <div class="columns">
        <div class="column is-4-tablet is-2-desktop is-2-widescreen">
          <nav class="menu">
            <p class="menu-label">
              <font-awesome-icon :icon="['fa', 'menu']"/> Menu
            </p>
            <ul class="menu-list">
              <li>
                <nuxt-link to="/">
                  <span class="icon">
                    <font-awesome-icon :icon="['fas', 'book']"/>
                  </span>
                   Page 1
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/page2">
                  <span class="icon">
                    <font-awesome-icon :icon="['fas', 'book']"/>
                  </span>
                  Page 2
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/page3">
                  <span class="icon">
                    <font-awesome-icon :icon="['fas', 'book']"/>
                  </span>
                  Page 3
                </nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
        <nuxt />
      </div>
    </section>s
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
