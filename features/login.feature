Feature: Login


  Scenario Outline:  Successful login through LOG IN

      When Ida fills "EMAIL ADDRESS" with <email>
      And fills "PASSWORD" with <password>
      And selects "LOG IN"
        Then Ida should be able to see the workplace dashboard with her name
        Examples:
        | email | password |
        | "jensid145@gmail.com" | "SoFl7912**" |
        | "jensid3025@gmail.com" | "SoFl7912**" |

  Scenario: Failed login through LOG IN

      When Ida fills "EMAIL ADDRESS" with <email>
      And fills "PASSWORD" with <password>
      And selects "LOG IN"
        Then Ida should still be on login page
        And see error "Incorrect username and/or password. Please try again."
