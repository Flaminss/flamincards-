## Overview

This digital marketplace facilitates seamless trading of gift cards, purchasing of beats, and provides a comprehensive Virtual Top-Up (VTU) platform for airtime, internet data, and utility payments.

## Directory Overview

The project employs unique patterns and deviates from conventional trends and standards. The architecture and design choices are specifically tailored to meet the project's unique requirements and objectives, which may differ from standard practices.

<p>
The project adopts a pragmatic architectural approach, primarily following a feature-based structure. Layer-based or classification folders, such as modules, hooks, and validators, are created only when the project's complexity demands it. This approach ensures the codebase remains organized and maintainable without imposing unnecessary structural rigidity.
</p>

- **`app`**: Contains UI presentation files.
- **`lib`**: Holds modules and scripts to perform tasks, implement, and encapsulate integrations. This can include hooks, utility functions, and abstractions over services like APIs and mail. In other projects, this could be further split into into `services` and `utils` directories in other projects.
- **`store`**: Manages Global UI logic and client state, focusing on state management rather than storing modules for various actions.
- **`modules`**: Handles business logic by managing various modules that enable the project to achieve its intended purpose. It processes data, interacts with services, and performs tasks that make the application dynamic and distinct from a static site. One could also refer to modules files/functions as `actions` seen in other projects.
- **`vendors`**: Stores reusable files that can be utilized within this project and other codebases. These files are not coupled to the project in terms of settings, tooling, and other dependencies. They include Plugins, Templates and so on.
