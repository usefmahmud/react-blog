import { Controller, useForm } from 'react-hook-form'
import Input from '../ui/Input'
import { NewBlogFormSchema } from '../../types'
import { zodResolver } from '@hookform/resolvers/zod'
import { NewBlogSchemaValidation } from '../../schemas'
import { useAddBlogMutation } from '../../hooks/posts/useAddBlogMutation'
import { useParams } from 'react-router-dom'
import { useGetPostById } from '../../hooks/posts/useGetBlogById'
import { useEditBlogMutation } from '../../hooks/posts/useEditBlogMutation'

interface NewBlogFormProps {
  isEdit?: boolean
}

const NewBlogForm: React.FC<NewBlogFormProps> = ({
  isEdit
}) => {
  const { id } = useParams()

  const newBlogMutation = useAddBlogMutation()
  const editBlogMutation = useEditBlogMutation()
  const blogQuery = useGetPostById(id!)

  const {
    handleSubmit,
    control,
    setValue,
    formState: {
      errors
    }
  } = useForm<NewBlogFormSchema>({
    resolver: zodResolver(NewBlogSchemaValidation)
  })

  const onSubmit = (data: NewBlogFormSchema) => {
    if(!isEdit){
      newBlogMutation.mutate(data)
      return
    }

    if(id){
      editBlogMutation.mutate({id, data})
    }
  } 

  if(blogQuery.isLoading){
    return <div>Loading...</div>
  }

  if(blogQuery.isError){
    return <div>Error fetching blog</div>
  }

  if(blogQuery.isSuccess){
    setValue('title', blogQuery.data?.data.blog.title)
    setValue('author', blogQuery.data?.data.blog.author)
    setValue('content', blogQuery.data?.data.blog.content)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3">
          <div>
            <label htmlFor='title' className="text-xl font-bold">Title:</label>
            <Controller 
              name='title'
              control={control}
              render={({field}) => (
                <Input 
                  {...field}
                  placeholder="Title"
                  value={field.value}
                />
              )}
            />
            {
              errors.title && <span className="text-sm font-semibold ml-2 text-red-800">Title cannot be empty.</span>
            }
          </div>

          <div>
            <label htmlFor='author' className="text-xl font-bold">Author:</label>
            <Controller 
              name='author'
              control={control}
              render={({field}) => (
                <Input 
                  {...field}
                  placeholder="Author"
                  value={field.value}
                />
              )}
            />
            {
              errors.author && <span className="text-sm font-semibold ml-2 text-red-800">Author cannot be empty.</span>
            }
          </div>

          <div>
            <label htmlFor='content' className="text-xl font-bold">Content:</label>
            <Controller 
              name='content'
              control={control}
              render={({field}) => (
                <textarea 
                  {...field}
                  placeholder="Content" 
                  rows={5}
                  className="resize-none bg-white border border-gray-300 rounded-md p-2 w-full focus:outline-none"
                  value={field.value}
                />
              )}
            />
            {
              errors.content && <span className="text-sm font-semibold ml-2 text-red-800">Content cannot be empty.</span>
            }
          </div>

          <div>
            <button 
              className="w-full bg-blue-400 text-white font-bold py-2 rounded-md cursor-pointer hover:bg-blue-500 disabled:hover:bg-blue-200 disabled:bg-blue-200 disabled:cursor-default" 
              type="submit"
              disabled={newBlogMutation.isPending}
            >
              {
                isEdit ? 'Update' : 'Create'
              }
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default NewBlogForm