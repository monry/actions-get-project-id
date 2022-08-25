# Get Project Id

Get node ID of GitHub Projects with Project Number

# Usage

```yaml
- uses: monry/actions-get-project-id@v1
  with:
    # Personal Access Token that with `org:read` are granted.
    github-token: ${{ secrets.PAT_PROJECT_V2 }}

    # Owner name of project
    project-owner: 'monry'

    # Number of project
    # 
    # The project number is the number shown in the URL or list
    # https://github.com/users/monry/projects/123
    #                                         ^^^
    project-number: 1
```

# Inputs

## `github-token`

This action requires Personal Access Token that `org:read` is granted.

For security purposes, it is recommended to register Personal Access Token as Secrets.

## `project-owner`

This action requires owner name of project.

Owner name refers to the user name or the organization name.

## `project-number`

This action requires project number.

The project number is the number shown in the URL or list of projects.

# Outputs

## `project-id`

Obtained value stores into output variable named `project-id`.

```yaml
- uses: monry/actions-get-project-id@v1
  id: get-project-id # requires `id` to refer output values with after steps
  with:
    github-token: ${{ secrets.PAT_PROJECT_V2 }}
    project-owner: 'monry'
    project-number: 1
- run: |
    echo '${{ steps.get-project-id.outputs.project-id }}'
```
