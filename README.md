Created redux store with userInfo and counter - react-redux , redux

Coverted simple redux to RTK - @reduxjs/toolkit

Added Routing using - @recat-router-dom

setup normal redux and loader wihtout thunk ->
For small apps, Thunk is overkill and your current approach is fine. It starts making sense when your app grows and you don't want fetch logic scattered across 10 different components.

Your current approach — async logic lives in the component:
Component → fetch → dispatch(result)

With Thunk — async logic moves into Redux:
Component → dispatch(thunk) → thunk fetches → dispatch(result)

The difference is where the logic lives, not whether it works.


