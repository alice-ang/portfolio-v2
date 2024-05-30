import { request, gql, GraphQLClient } from "graphql-request";
import { PreviewProject, Project, Stack } from "./types";
import { useQuery } from "@tanstack/react-query";

export const graphQLClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_HYGRAPH_API as string,
  {
    headers: {
      "x-api-key": process.env.NEXT_PUBLIC_HYGRAPH_API as string,
    },
  }
);

export const fetchStack = async () => {
  const { stacks } = await request<any>(
    process.env.NEXT_PUBLIC_HYGRAPH_API as string,
    gql`
      query allStacks {
        stacks {
          name
          tech
        }
      }
    `
  );

  return stacks as Stack[];
};

export const fetchProjects = async () => {
  const { projects } = await request<any>(
    process.env.NEXT_PUBLIC_HYGRAPH_API as string,
    gql`
      query projects {
        projects {
          id
          title
          images {
            url
            id
          }
        }
      }
    `
  );

  return projects as PreviewProject[];
};

export const useProjectById = (id: string) => {
  return useQuery({
    queryKey: ["projectById"],
    queryFn: async () => {
      const { projects } = await graphQLClient.request<any>(
        gql`
          query GetProjectById($id: ID!) {
            projects(where: { id: $id }) {
              id
              title
              images {
                url
                id
              }
              description {
                markdown
              }
              dateOfCreation
              projectStatus
              projectLinks {
                externalLink
                url
              }
              stacks {
                id
                name
              }
            }
          }
        `,
        { id }
      );

      return projects[0] as Project;
    },
  });
};
