


<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>rangyinputs/rangyinputs-jquery.js at master · timdown/rangyinputs</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="timdown/rangyinputs" name="twitter:title" /><meta content="rangyinputs - Rangy Inputs" name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/158919?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/158919?v=3&amp;s=400" property="og:image" /><meta content="timdown/rangyinputs" property="og:title" /><meta content="https://github.com/timdown/rangyinputs" property="og:url" /><meta content="rangyinputs - Rangy Inputs" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/OTAwOTU0OTo4MDU5MWUzNjFjNWIxYmJlYmY0YjdjZmRmODk2NGIzYjozMGQ4NGEwYzk4NTZmZjhmZGVmNzZmMThlNzEzMjU4M2IzZmYzMDE5N2ZjY2I4ZTc0NWI4Yzk1MGNkMWU2MjUw--3f0dece40664778d842a99c5d4995ba70e1ccf82">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="92C8E002:5905:132D4669:55330D7F" name="octolytics-dimension-request_id" /><meta content="9009549" name="octolytics-actor-id" /><meta content="searchdemontest" name="octolytics-actor-login" /><meta content="02ae8e4739ba72a18dd97ea0363a63d412d46df46d6813e8fee911d6f25fe76c" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />
    <meta class="js-ga-set" name="dimension1" content="Logged In">
    <meta class="js-ga-set" name="dimension2" content="Header v3">
    <meta name="is-dotcom" content="true">
    <meta name="hostname" content="github.com">
    <meta name="user-login" content="searchdemontest">

    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="5Y8OYbV0M5PD48UQCkNWplqAb06bsC0aFoEMD/kVQHNpecOmJeRIr9o628mXETIWQ6LO8fK+q9HdKVU1GSyk3Q==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-99d0b872ee54fd3afae4675a7592394fa9d65696f8ad7a751b79704bc999f40a.css" media="all" rel="stylesheet" />
    <link href="https://assets-cdn.github.com/assets/github2-4dcecdbd59af4cd1dd8cf24ccaf35b686d848468ddcd7d52a8bf57c21ac4e5fb.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="f16199bf45edde13bbc8d0c453f279fe">

      
  <meta name="description" content="rangyinputs - Rangy Inputs">
  <meta name="go-import" content="github.com/timdown/rangyinputs git https://github.com/timdown/rangyinputs.git">

  <meta content="158919" name="octolytics-dimension-user_id" /><meta content="timdown" name="octolytics-dimension-user_login" /><meta content="7881846" name="octolytics-dimension-repository_id" /><meta content="timdown/rangyinputs" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="7881846" name="octolytics-dimension-repository_network_root_id" /><meta content="timdown/rangyinputs" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/timdown/rangyinputs/commits/master.atom" rel="alternate" title="Recent Commits to rangyinputs:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      


        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/timdown/rangyinputs/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/timdown/rangyinputs/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item explore">
            <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
          </li>
            <li class="header-nav-item">
              <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
            </li>
            <li class="header-nav-item">
              <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
            </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
          </li>
      </ul>

      
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/searchdemontest" data-ga-click="Header, go to profile, text:username">
      <img alt="@searchdemontest" class="avatar" data-user="9009549" height="20" src="https://avatars1.githubusercontent.com/u/9009549?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">searchdemontest</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="/new" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu">
        
<li>
  <a href="/new" data-ga-click="Header, create new repository, icon:repo"><span class="octicon octicon-repo"></span> New repository</a>
</li>
<li>
  <a href="/organizations/new" data-ga-click="Header, create new organization, icon:organization"><span class="octicon octicon-organization"></span> New organization</a>
</li>


  <li class="dropdown-divider"></li>
  <li class="dropdown-header">
    <span title="timdown/rangyinputs">This repository</span>
  </li>
    <li>
      <a href="/timdown/rangyinputs/issues/new" data-ga-click="Header, create new issue, icon:issue"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>

      </ul>
    </div>
  </li>

  <li class="header-nav-item">
      <span 
        data-channel="notification-changed:searchdemontest"
        data-url="/notifications/header">
      <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
          <span class="mail-status all-read"></span>
          <span class="octicon octicon-inbox"></span>
</a>  </span>

  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="P9mfEOkAkIbngXZkb5bPBe6FnBzg7YqiG2TxGkFjJdfUxoW4FjZn5w5m+Y0nwCHEpvKuTUS+xDj2p67gNM26/Q==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>



    
  </div>
</div>

        

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

  <li>
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="aL1HgxHOOEhWDZKXl4+jARO9wUM305QvpfP+lai4yGxjmboWqH/kf0dkHJrI45TDMO+jY5z2uD6aXgPhWARxkg==" /></div>    <input id="repository_id" name="repository_id" type="hidden" value="7881846" />

      <div class="select-menu js-menu-container js-select-menu">
        <a href="/timdown/rangyinputs/subscription"
          class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
          data-ga-click="Repository, click Watch settings, action:blob#show">
          <span class="js-select-button">
            <span class="octicon octicon-eye"></span>
            Watch
          </span>
        </a>
        <a class="social-count js-social-count" href="/timdown/rangyinputs/watchers">
          6
        </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="select-menu-title">Notifications</span>
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
            </div>

            <div class="select-menu-list js-navigation-container" role="menu">

              <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                  <span class="select-menu-item-heading">Not watching</span>
                  <span class="description">Be notified when participating or @mentioned.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Watch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                  <span class="select-menu-item-heading">Watching</span>
                  <span class="description">Be notified of all conversations.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Unwatch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_ignore" name="do" type="radio" value="ignore" />
                  <span class="select-menu-item-heading">Ignoring</span>
                  <span class="description">Never be notified.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-mute"></span>
                    Stop ignoring
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/timdown/rangyinputs/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="ftM0dNJkJlCLmCb5r+wzURXzujX2BdfCPEPtN6rt1nVaYeFMsfFQ/2MYP+kSlEaJ+jXF4Kwt1UvtE1H44HOdrg==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar timdown/rangyinputs"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/timdown/rangyinputs/stargazers">
          82
        </a>
</form>
    <form accept-charset="UTF-8" action="/timdown/rangyinputs/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="R4UvC/ZFwE3VsUaI77a6GKUG+g5cKyjmZ7UimVSu9j8xyCEyJh05+TuctnmtLTvXK16mvAu+/RkcHxLlM8U+bQ==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star timdown/rangyinputs"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/timdown/rangyinputs/stargazers">
          82
        </a>
</form>  </div>

  </li>

        <li>
          <form accept-charset="UTF-8" action="/timdown/rangyinputs/fork" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="DrQMAWrD3C63GBLktwTbZ8IkLXFyl9aC/l16XQeKIsmk1M59vT58tQzyqqNfXeokN/cWJrlnk5u881wju2+zBg==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of timdown/rangyinputs to your account"
                aria-label="Fork your own copy of timdown/rangyinputs to your account">
              <span class="octicon octicon-repo-forked"></span>
              Fork
            </button>
            <a href="/timdown/rangyinputs/network" class="social-count">12</a>
</form>        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/timdown" class="url fn" itemprop="url" rel="author"><span itemprop="title">timdown</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/timdown/rangyinputs" class="js-current-repository" data-pjax="#js-repo-pjax-container">rangyinputs</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/timdown/rangyinputs/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/timdown/rangyinputs" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /timdown/rangyinputs">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/timdown/rangyinputs/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /timdown/rangyinputs/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/timdown/rangyinputs/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /timdown/rangyinputs/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/timdown/rangyinputs/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /timdown/rangyinputs/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/timdown/rangyinputs/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /timdown/rangyinputs/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/timdown/rangyinputs/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /timdown/rangyinputs/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/timdown/rangyinputs.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" data-copy-hint="Copy to clipboard" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:timdown/rangyinputs.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" data-copy-hint="Copy to clipboard" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/timdown/rangyinputs" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" data-copy-hint="Copy to clipboard" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>, <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>, or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="https://windows.github.com" class="btn btn-sm sidebar-button" title="Save timdown/rangyinputs to your computer and use it in GitHub Desktop." aria-label="Save timdown/rangyinputs to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/timdown/rangyinputs/archive/master.zip"
                   class="btn btn-sm sidebar-button"
                   aria-label="Download the contents of timdown/rangyinputs as a zip file"
                   title="Download the contents of timdown/rangyinputs as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/timdown/rangyinputs/blob/01f36cf446b42a1ffe61212984daa749cf7bcbf4/rangyinputs-jquery.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:e5637c742ad5513a896a5dc004e9f1ff -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/timdown/rangyinputs/blob/master/rangyinputs-jquery.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/timdown/rangyinputs/tree/1.2.0/rangyinputs-jquery.js"
                 data-name="1.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.0">1.2.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/timdown/rangyinputs/tree/1.1.4/rangyinputs-jquery.js"
                 data-name="1.1.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.1.4">1.1.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/timdown/rangyinputs/tree/1.1.3/rangyinputs-jquery.js"
                 data-name="1.1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.1.3">1.1.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/timdown/rangyinputs/tree/1.1.2/rangyinputs-jquery.js"
                 data-name="1.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.1.2">1.1.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/timdown/rangyinputs/tree/1.1.1/rangyinputs-jquery.js"
                 data-name="1.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.1.1">1.1.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/timdown/rangyinputs/tree/1.1.0/rangyinputs-jquery.js"
                 data-name="1.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.1.0">1.1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/timdown/rangyinputs/tree/1.0.0/rangyinputs-jquery.js"
                 data-name="1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.0">1.0.0</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/timdown/rangyinputs/find/master"
          class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" data-copy-hint="Copy file path to clipboard" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/timdown/rangyinputs" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">rangyinputs</span></a></span></span><span class="separator">/</span><strong class="final-path">rangyinputs-jquery.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="@timdown" class="avatar" data-user="158919" height="24" src="https://avatars1.githubusercontent.com/u/158919?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/timdown" rel="author">timdown</a></span>
        <time datetime="2014-11-30T19:12:29Z" is="relative-time">Nov 30, 2014</time>
        <div class="commit-title">
            <a href="/timdown/rangyinputs/commit/cd193ee11ea5c3e7e33b27c081df7a1276e20083" class="message" data-pjax="true" title="Changed version number to 1.2.0">Changed version number to 1.2.0</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>1</strong>
           contributor
        </a>
      </p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="@timdown" data-user="158919" height="24" src="https://avatars1.githubusercontent.com/u/158919?v=3&amp;s=48" width="24" />
            <a href="/timdown">timdown</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
    <div class="file-actions">

      <div class="btn-group">
        <a href="/timdown/rangyinputs/raw/master/rangyinputs-jquery.js" class="btn btn-sm " id="raw-url">Raw</a>
          <a href="/timdown/rangyinputs/blame/master/rangyinputs-jquery.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
        <a href="/timdown/rangyinputs/commits/master/rangyinputs-jquery.js" class="btn btn-sm " rel="nofollow">History</a>
      </div>

        <a class="octicon-btn tooltipped tooltipped-nw"
           href="https://windows.github.com"
           aria-label="Open this file in GitHub for Windows">
            <span class="octicon octicon-device-desktop"></span>
        </a>

            <form accept-charset="UTF-8" action="/timdown/rangyinputs/edit/master/rangyinputs-jquery.js" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="PWzuLxbP+XzTHbnTzVxwCYqQolDXALVQlayIlOtV5JLBb0u1H7ILfw6HdXDVb1hJvzBYWgezR3njfPt2EM+dZg==" /></div>
              <button class="octicon-btn tooltipped tooltipped-n" type="submit" aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
                <span class="octicon octicon-pencil"></span>
              </button>
</form>
          <form accept-charset="UTF-8" action="/timdown/rangyinputs/delete/master/rangyinputs-jquery.js" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="q3U69gJYqLQ8G419yIBRZqCRDfdk2zX7kVEGk9Je9smaBG017T89eFKIgcLb1w2tdM8yroT+edJU52U1NWeiCw==" /></div>
            <button class="octicon-btn octicon-btn-danger tooltipped tooltipped-n" type="submit" aria-label="Fork this project and delete this file" data-disable-with>
              <span class="octicon octicon-trashcan"></span>
            </button>
</form>    </div>

    <div class="file-info">
        17 lines (16 sloc)
        <span class="file-info-divider"></span>
      4.307 kb
    </div>
  </div>
  
  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line"><span class="pl-c"> * @license Rangy Inputs, a jQuery plug-in for selection and caret manipulation within textareas and text inputs.</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line"><span class="pl-c"> * https://github.com/timdown/rangyinputs</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line"><span class="pl-c"> * For range and selection features for contenteditable, see Rangy.</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line"><span class="pl-c"> * http://code.google.com/p/rangy/</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line"><span class="pl-c"> * Depends on jQuery 1.0 or later.</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line"><span class="pl-c"> * Copyright 2014, Tim Down</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line"><span class="pl-c"> * Licensed under the MIT license.</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line"><span class="pl-c"> * Version: 1.2.0</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line"><span class="pl-c"> * Build date: 30 November 2014</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line">!function(e){function t(e,t){var n=typeof e[t];return&quot;function&quot;===n||!(&quot;object&quot;!=n||!e[t])||&quot;unknown&quot;==n}function n(e,t){return typeof e[t]!=x}function r(e,t){return!(&quot;object&quot;!=typeof e[t]||!e[t])}function o(e){window.console&amp;&amp;window.console.log&amp;&amp;window.console.log(&quot;RangyInputs not supported in your browser. Reason: &quot;+e)}function a(e,t,n){return 0&gt;t&amp;&amp;(t+=e.value.length),typeof n==x&amp;&amp;(n=t),0&gt;n&amp;&amp;(n+=e.value.length),{start:t,end:n}}function c(e,t,n){return{start:t,end:n,length:n-t,text:e.value.slice(t,n)}}function l(){return r(document,&quot;body&quot;)?document.body:document.getElementsByTagName(&quot;body&quot;)[0]}var i,u,s,d,f,v,p,m,g,x=&quot;undefined&quot;;e(document).ready(function(){function h(e,t){var n=e.value,r=i(e),o=r.start;return{value:n.slice(0,o)+t+n.slice(r.end),index:o,replaced:r.text}}function y(e,t){e.focus();var n=i(e);return u(e,n.start,n.end),&quot;&quot;==t?document.execCommand(&quot;delete&quot;,!1,null):document.execCommand(&quot;insertText&quot;,!1,t),{replaced:n.text,index:n.start}}function T(e,t){e.focus();var n=h(e,t);return e.value=n.value,n}function E(e,t){return function(){var n=this.jquery?this[0]:this,r=n.nodeName.toLowerCase();if(1==n.nodeType&amp;&amp;(&quot;textarea&quot;==r||&quot;input&quot;==r&amp;&amp;/^(?:text|email|number|search|tel|url|password)$/i.test(n.type))){var o=[n].concat(Array.prototype.slice.call(arguments)),a=e.apply(this,o);if(!t)return a}return t?this:void 0}}var S=document.createElement(&quot;textarea&quot;);if(l().appendChild(S),n(S,&quot;selectionStart&quot;)&amp;&amp;n(S,&quot;selectionEnd&quot;))i=function(e){var t=e.selectionStart,n=e.selectionEnd;return c(e,t,n)},u=function(e,t,n){var r=a(e,t,n);e.selectionStart=r.start,e.selectionEnd=r.end},g=function(e,t){t?e.selectionEnd=e.selectionStart:e.selectionStart=e.selectionEnd};else{if(!(t(S,&quot;createTextRange&quot;)&amp;&amp;r(document,&quot;selection&quot;)&amp;&amp;t(document.selection,&quot;createRange&quot;)))return l().removeChild(S),void o(&quot;No means of finding text input caret position&quot;);i=function(e){var t,n,r,o,a=0,l=0,i=document.selection.createRange();return i&amp;&amp;i.parentElement()==e&amp;&amp;(r=e.value.length,t=e.value.replace(/\r\n/g,&quot;\n&quot;),n=e.createTextRange(),n.moveToBookmark(i.getBookmark()),o=e.createTextRange(),o.collapse(!1),n.compareEndPoints(&quot;StartToEnd&quot;,o)&gt;-1?a=l=r:(a=-n.moveStart(&quot;character&quot;,-r),a+=t.slice(0,a).split(&quot;\n&quot;).length-1,n.compareEndPoints(&quot;EndToEnd&quot;,o)&gt;-1?l=r:(l=-n.moveEnd(&quot;character&quot;,-r),l+=t.slice(0,l).split(&quot;\n&quot;).length-1))),c(e,a,l)};var w=function(e,t){return t-(e.value.slice(0,t).split(&quot;\r\n&quot;).length-1)};u=function(e,t,n){var r=a(e,t,n),o=e.createTextRange(),c=w(e,r.start);o.collapse(!0),r.start==r.end?o.move(&quot;character&quot;,c):(o.moveEnd(&quot;character&quot;,w(e,r.end)),o.moveStart(&quot;character&quot;,c)),o.select()},g=function(e,t){var n=document.selection.createRange();n.collapse(t),n.select()}}l().removeChild(S);var b=function(e,t){var n=h(e,t);try{var r=y(e,t);if(e.value==n.value)return b=y,r}catch(o){}return b=T,e.value=n.value,n};d=function(e,t,n,r){t!=n&amp;&amp;(u(e,t,n),b(e,&quot;&quot;)),r&amp;&amp;u(e,t)},s=function(e){u(e,b(e,&quot;&quot;).index)},m=function(e){var t=b(e,&quot;&quot;);return u(e,t.index),t.replaced};var R=function(e,t,n,r){var o=t+n.length;if(r=&quot;string&quot;==typeof r?r.toLowerCase():&quot;&quot;,(&quot;collapsetoend&quot;==r||&quot;select&quot;==r)&amp;&amp;/[\r\n]/.test(n)){var a=n.replace(/\r\n/g,&quot;\n&quot;).replace(/\r/g,&quot;\n&quot;);o=t+a.length;var c=t+a.indexOf(&quot;\n&quot;);&quot;\r\n&quot;==e.value.slice(c,c+2)&amp;&amp;(o+=a.match(/\n/g).length)}switch(r){case&quot;collapsetostart&quot;:u(e,t,t);break;case&quot;collapsetoend&quot;:u(e,o,o);break;case&quot;select&quot;:u(e,t,o)}};f=function(e,t,n,r){u(e,n),b(e,t),&quot;boolean&quot;==typeof r&amp;&amp;(r=r?&quot;collapseToEnd&quot;:&quot;&quot;),R(e,n,t,r)},v=function(e,t,n){var r=b(e,t);R(e,r.index,t,n||&quot;collapseToEnd&quot;)},p=function(e,t,n,r){typeof n==x&amp;&amp;(n=t);var o=i(e),a=b(e,t+o.text+n);R(e,a.index+t.length,o.text,r||&quot;select&quot;)},e.fn.extend({getSelection:E(i,!1),setSelection:E(u,!0),collapseSelection:E(g,!0),deleteSelectedText:E(s,!0),deleteText:E(d,!0),extractSelectedText:E(m,!1),insertText:E(f,!0),replaceSelectedText:E(v,!0),surroundSelectedText:E(p,!0)})})}(jQuery);</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.05869s from github-fe138-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
    </ul>
  </div>
</div>


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-2c8ae50712a47d2b83d740cb875d55cdbbb3fdbccf303951cc6b7e63731e0c38.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-29f1a3f7b7d09cac4ebdeb6f7c87beaaef3237771dd3902546393d943f1c5269.js"></script>
      
      

      <div class="js-socket-channel" data-channel="test:searchdemontest"></div>

  </body>
</html>

