Continuous Delivery with Feature Toggle
==============

- What
	- Definition: blablabla
	- Sample Implementation

- Why
	- The Problem [http://martinfowler.com/bliki/FeatureToggle.html]
	- Solutions
	    - Feature Branch - Branching in SCM (Pros & Cons)
	        + Better Isolation
	        - Deferred Merge And Integration => Merge Hell
	        - Chilling Effect on Refactoring
	    - Feature Toggle - Branching in Code (Pros & Cons)
	        + Continuous Integration
	        - More Considerations of Design And Imeplementation
	        - Risk of negative effects from
	        - More complexity and less readability in code
	- Supplemental Technique to Continuous Delivery by Decoupling Integration from Feature Release

- Prerequisites
    - CD pipeline
    - CI
    - Automated Testing (Unit, Integration, Functional, Load, Stress, Endurance, Security, etc...)

- Some Patterns with Feature Toggle
	- UI (HTML, CSS, JS)
	- Web API
	- Data Store

- Lifecycle (with Demo)
	- Plan with Feature Toggle
	    - Can it be avoided?
	    - Exit Strategy
	    - Scope, Time and Order of Delivery

	- Develop with Feature Toggle
	    - Refactor
	    - Releasable Commits: Care about builds and deployments 

	- Test with Feature Toggle
	    - Keep test for "toggle off"
	    - Add test for "toggle on" after dev done

	- Release with Feature Toggle
	    - Feature toggle status

	- Retire Feature Toggle
	    - Careful and thorough clean up
	    - Tests

- Tricks And Tips
	- minimize conditional logic to the UI and to entry points in the system
    - Live as short as possible
    - Make Them Independent
    - Control the total number
    - Control the scope
    - Design
    - Chose Name Wisely

- "Release toggles are the last thing you should do." 
