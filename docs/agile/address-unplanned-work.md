---
sidebar_position: 2
authors: [conrad]
---
# What is `unplanned` work?

Unplanned work is ***any activity in the IT organization that can't be mapped to an authorized project, procedure or change request***. Any service interruption, failed change, emergency change, or patch or security incident creates unplanned work.

## Tracking `unplanned` work

***Labeling*** or ***tagging*** is extremely important to track unplanned work.  Whether you are using [GitHub](https://www.github.com), [Azure DevOps](https://www.dev.azure.com) or eithers its important that both infrastructure or software developers have a way of asssociating a request, change, or security incident.

There are many ways `unplanned` work can show its face.

- Email
- Email Distributions Lists
- Chat Operations
- Phone
- Producer/Service owners avoiding work funnel

### GitHub Laber

A personal favorite for `GitHub` is the [actions/laber](https://github.com/actions/labeler).  There is a good set of instructions on how to set this up and it can automatically label ***Pull Requests*** or ***Issues***. Below is an ex

#### **Source:** ***.github/laber.yml***

```yaml
# Add 'repo' label to any root file changes
repo:
- '*'

# Add 'source' label to any change to src files within the source dir EXCEPT for the docs sub-folder
source:
- 'src/*'

# Add 'blog` label to any change to *.js files as long as the `main.js` hasn't changed
blog:
- 'blog/*'

# Add 'docs` label to any change to *.js files as long as the `main.js` hasn't changed
docs:
- 'docs/*'
```

#### **GitHub Action:** ***.github/workflows/label.yml***

```yaml
# This workflow will triage pull requests and apply a label based on the
# paths that are modified in the pull request.
#
# To use this workflow, you will need to set up a .github/labeler.yml
# file with configuration.  For more information, see:
# https://github.com/actions/labeler

name: pr-labeler
on: [pull_request]

jobs:
  label:

    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write

    steps:
    - uses: actions/labeler@v2
      with:
        repo-token: "${{ secrets.GITHUB_TOKEN }}"
```

## GitHub Project Labels

Equally important is having a set if using ***Projects*** is the use of labels that can be applied to cards which move across the Kanban lanes.

![GitHub Project Labels](/img/agile/gh-project-labels.jpg)

## Azure DevOps

`Azure DevOps` lacks this integration for ***Pull Requests***, it can be performed by some clever ***REST API*** work against if interested you can find more on this by using [Pull Docs - Azure DevOps | Request Labels](https://docs.microsoft.com/en-us/rest/api/azure/devops/git/pull-request-labels?view=azure-devops-rest-6.0).

### Azure Boards Unplanned Tracking

Much like `GitHub`, `Azure DevOps` offers the same tagging within its boards.   Each board  is assigned an iteration and areapath.  Its important that product/servers owners explain to team members that if requests are coming in that they are tagged accordingly with `unplanned`.

`Azure DevOps` boards has a advantage to `GitHub` projects, this advantage is clever reporting mechanisms which can be dashboarded.  If your looking for a quick win on how to track unplanned work, I recommend using [Unplanned Work Report](https://docs.microsoft.com/en-us/previous-versions/azure/devops/report/sql-reports/unplanned-work?view=tfs-2017).

## How `unplanned` work can be managed

It is extremely important, that Product/Server owners understand how to say **No** this is called `Prioritization`.  Its obvious we by nature want to immediately help those in need but it detracts from your current sprint work.  Good communication between product/server owners can arrange and plan when the sideways work should be handled.  Keeping your teams on task.

Additionally, there are a capable other tactics that can be utilized:

- **Absorb** - If you can bring it into the current sprint.  Produc/Server owners should typically budget time for the unexpected.
- **Break Up/Carry** - Split the work, take what capacity you can and carry the remaining to the next sprint.
- **Substitute** - Move an item from your current sprint out, and take on the unplanned work.
- **Buffer Zone** - Leave capacity during sprint planning and bring in the work.

## How to keep `unplanned` work in check

First and foremost, a plan is only good until the rubber meets the road.  Unfortunately, we cannot stop unplanned work.  But we can identify it and introduce automation, self-service which will greatly reduce the impact on your team.  While this is easily said, sometimes it is difficult to implement.  

Additionally, identify members on your team that are leaders.  Don't ***hail mary*** your pull requests or code.  Demand the quality of code being produced meet required standards and enforce it.  This will build a team working in unison and know exactly what the requirements of a `user story` or `product backlog item` item are.

