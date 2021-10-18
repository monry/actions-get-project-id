# Get Project Id

Get node ID of Project (Beta) with Project Number

# Usage

```yaml
- uses: monry/actions-get-project-id@v1
  with:
    # Personal Access Token that with `org:read` are granted.
    github-token: ${{ secrets.PAT_PROJECT_NEXT }}

    # Owner name of project
    project-owner: 'monry'

    # Owner type of project
    # 
    # The value can be one of the following: 'user', 'organization'
    # 
    # Default: 'organization'
    project-owner-type: 'user'

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

## `project-owner-type`

Type of owner of project.

The value should be one of the following values.

- `user`
- `organization` (default)

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
    github-token: ${{ secrets.PAT_PROJECT_NEXT }}
    project-owner: 'monry'
    project-owner-type: 'user'
    project-number: 1
- run: |
    echo '${{ steps.get-project-id.outputs.project-id }}'
```
